import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

export abstract class MarketplaceRepository {
  abstract getListings(): Observable<Product[]>;
}
