import { Component, OnInit } from "@angular/core";
import { PostService } from "./post.service";
import { AppError } from "src/app/errors/app.error";

@Component({
    selector: 'http-demo',
    templateUrl: 'httpdemo.component.html'
})
export class HttpDemoComponent implements OnInit {

    userposts: any[];
    postcontent: string;

    constructor(private postservice: PostService) {
        this.fetchData();
    }

    ngOnInit() {
        this.fetchData();
    }


    private fetchData() {
        let resp: any;
        this.postservice.getPosts()
            .subscribe((response) => {
                resp = response;
                console.log(response);
                this.userposts = resp;
            });
    }

    createPost() {
        let post = { body: this.postcontent };
        let resp: any;
        this.postservice.addPosts(post)
            .subscribe((response) => {
                if (response instanceof AppError) {
                    alert('Error Occurred ');
                } else {
                    debugger;
                    resp = response;
                    this.userposts.push(resp);
                    this.postcontent = "";
                }
            });
    }

}