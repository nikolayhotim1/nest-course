import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { Body, Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('posts')
export class PostsController {
    constructor(private postsService: PostsService) { }

    @Post()
    @UseInterceptors(FileInterceptor('image'))
    createPost(
        @Body() dto: CreatePostDto,
        @UploadedFile() image: { buffer: string | NodeJS.ArrayBufferView; }
    ) {
        return this.postsService.create(dto, image);
    }
};