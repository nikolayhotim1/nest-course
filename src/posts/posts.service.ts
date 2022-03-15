import { FilesService } from './../files/files.service';
import { InjectModel } from '@nestjs/sequelize';
import { CreatePostDto } from './dto/create-post.dto';
import { Injectable } from '@nestjs/common';
import { Post } from './posts.model';

@Injectable()
export class PostsService {
    constructor(
        @InjectModel(Post) private postRepository: typeof Post,
        private FilesService: FilesService
    ) { }

    async create(dto: CreatePostDto, image: { buffer: string | NodeJS.ArrayBufferView; }) {
        const fileName = await this.FilesService.createFile(image);
        const post = await this.postRepository.create({ ...dto, image: fileName });
        return post;
    }
};