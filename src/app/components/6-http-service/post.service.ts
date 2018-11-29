import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';
import { AppError } from "src/app/errors/app.error";
import { AppResponse } from "src/app/reponse/app.response";

@Injectable()
export class PostService {

    constructor(private http: HttpClient) {

    }

    getPosts() {
        return this.http.get('https://jsonplaceholder.typicode.com/posts');
    }

    addPosts(post: any) {
        return this.http.post('https://jsonplaceholder.typicode.com/posts', post)
            .pipe(
                catchError((error: Response) => of(new AppError(error)))
            );
    }
}