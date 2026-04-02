import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put } from '@nestjs/common';
import { ProductService } from './product.service';
// import { Product } from 'src/models/productModel';
import { ProductDto } from 'src/models/productDto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('product')
export class ProductController {
    constructor(private productService: ProductService) {}
    
    @Get()
    async getProducts() {
        return this.productService.getProducts();
    }

    @Get(':id')
    async getProductById(@Param('id') id: number) {
        const product = await this.productService.getProductByID(id);
        if (!product) {
            throw new Error('Product not found');
        }
        return product;
    }
    
    @Post()
    @ApiOperation({summary: 'Add a new product'})
    @ApiResponse({
        status: 201,
        description: 'Product created',
        type: ProductDto,
    })
    async addProduct(@Body() product: ProductDto) {
        const newProduct = {
            id: -1,
            name: product.name,
            price: product.price,
            date: new Date(),
        };
        await this.productService.addProduct(newProduct);
    }

    @Delete(':id')
    @ApiOperation({summary: 'Remove a product'})
    @ApiResponse({
        status: 200, description : "Product Deleted"
    })
    @ApiResponse({
        status: 404, description : "Product not found"
    })
    async deleteProduct(@Param('id') id: string){
        const idNum = parseInt(id, 10);
        await this.productService.deleteProductById(idNum);
    }
    
    @Put(':id')
    @ApiOperation({ summary: 'Update product by ID' })
    @ApiResponse({
        status: 200,
        description: 'Product updated',
        type: ProductDto,
    })
    @ApiResponse({ status: 404, description: 'Product not found' })
    async updateProduct(@Param('id') id: string, @Body() product: ProductDto) {
        const idNum = parseInt(id, 10);
        if (isNaN(idNum)) {
        throw new NotFoundException('Invalid product ID');
        }
        const productToUpdate = {id: idNum, ...product, date: new Date() };
        await this.productService.updateProduct(productToUpdate);
    }
}
