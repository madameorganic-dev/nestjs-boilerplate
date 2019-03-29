import { Module } from "@nestjs/common";
import { PostModule } from "./module/post/post.module";
import { ArticleModule } from "./module/article/article.module";
import { ProductModule } from "./module/product/product.module";
import { StockModule } from "./module/stock/stock.module";

@Module({
          imports: [PostModule, ArticleModule, ProductModule, StockModule]
        })
export class AppModule {
}
