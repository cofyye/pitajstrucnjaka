import { Injectable, inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  ResolveFn,
} from '@angular/router';
import { Observable, mergeMap, of } from 'rxjs';
import { PaymentService } from '../services/payment.service';
import { IPaginationData } from '../interfaces/pagination.interface';
import { IPaymentInfo } from '../interfaces/payment.interface';

@Injectable({
  providedIn: 'root',
})
class PaymentServiceResolver {
  constructor(private readonly _paymentService: PaymentService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    _: RouterStateSnapshot
  ): Observable<IPaginationData<IPaymentInfo[]>> {
    const page = route.queryParamMap.get('page') ?? '1';
    const take = route.queryParamMap.get('take') ?? '9';
    const order = route.queryParamMap.get('order') ?? 'DESC';

    return this._paymentService.getPaymentsServices(page, take, order).pipe(
      mergeMap((response) => {
        return of(response.data);
      })
    );
  }
}

export const paymentServiceResolver: ResolveFn<
  IPaginationData<IPaymentInfo[]>
> = (route, state) => {
  return inject(PaymentServiceResolver).resolve(route, state);
};
