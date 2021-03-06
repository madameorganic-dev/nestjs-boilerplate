import { Controller, Get, Post, Body, Param, Query, Delete, UsePipes } from "@nestjs/common";
import { Product } from "./dto/product";
import { Service } from "./product.service";
import { BaseController } from "../Model/controller";
import { PostDeleteValidation } from "./Validation/product.validation";
import { ApiBearerAuth, ApiUseTags, ApiOperation, ApiResponse } from "@nestjs/swagger";

@ApiUseTags("Products")
@Controller("products")
@ApiBearerAuth()
export class CustomController extends BaseController {
  constructor(private readonly postsService: Service) {
    super(postsService);
  }

  // tslint:disable-next-line
  @Post()
  @ApiOperation({ title: "Create Products" })
  @ApiResponse(
    {
      description: "The record has been successfully created.",
      status: 201
    })
  @ApiResponse({ status: 403, description: "Forbidden." })
  public create(@Body() createPostDto: Product): Product {
    return super.create(createPostDto);
  }

  // tslint:disable-next-line
  @Get()
  @ApiOperation({ title: "List Products" })
  public async list(@Query() query: any): Promise<Product[]> {
    return super.list(query);
  }

  // tslint:disable-next-line
  @Get(":id")
  @ApiOperation({ title: "Get One Product" })
  public async get(@Param() params: any): Promise<Product> {
    return super.get(params);
  }

  // tslint:disable-next-line
  @Delete(":id")
  @UsePipes(new PostDeleteValidation())
  @ApiOperation({ title: "Delete Products" })
  public delete(@Param() params: Product): any {
    return super.delete(params);
  }
}
