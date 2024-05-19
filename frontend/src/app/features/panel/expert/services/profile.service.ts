import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../../../environments/environment";
import { IAcceptResponse } from "../../../../shared/interfaces/response.interface";

@Injectable()
export class ProfileService {
    constructor(private readonly _httpClient: HttpClient) { }

    changeName(data: any) {
        return this._httpClient.post<IAcceptResponse>(`${environment.API_URL}/users/update/firstname`, data)
    }
}