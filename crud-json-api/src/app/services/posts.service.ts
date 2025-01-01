import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../model/post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private baseUrl = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private httpClient:HttpClient) { }

  getEmployeeList():Observable<Post[]>{
   // return this.httpClient.get<Employee[]>(`${this.baseUrl}`);
    return this.httpClient.get<Post[]>(this.baseUrl);
  }

  getPostById(id:number):Observable<Post>{
    return this.httpClient.get<Post>(`${this.baseUrl}/${id}`);
  }

  addPost(post:Post):Observable<Object>{
    //  return this.httpClient.post(`${this.baseUrl}`,employee);
      return this.httpClient.post(this.baseUrl,post);
    }

    updatePost(id:number, post:Post):Observable<Post>{
      return this.httpClient.put<Post>(`${this.baseUrl}/${id}`,post);
    }

    deletePost(id:number):Observable<Object>{
      console.log(id)
      return this.httpClient.delete(`${this.baseUrl}/${id}`)
    }
}
