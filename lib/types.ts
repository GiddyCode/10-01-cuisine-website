export interface Category {
  id: string;
  name: string;
  icon: string;
}

export interface PortionOption {
  id: string;
  name: string;
  priceModifier: number;
}

export interface ProteinOption {
  id: string;
  name: string;
  price: number;
}

export interface AddOnOption {
  id: string;
  name: string;
  price: number;
}

export interface DishOptions {
  portions?: PortionOption[];
  proteins?: ProteinOption[];
  addOns?: AddOnOption[];
  spiceLevels?: string[];
}

export interface Dish {
  id: string;
  name: string;
  description: string;
  basePrice: number;
  categoryId: string;
  image: string;
  options: DishOptions;
  popular?: boolean;
}

export interface SelectedOptions {
  portion?: PortionOption;
  protein?: ProteinOption;
  addOns: AddOnOption[];
  spiceLevel: string;
  instructions: string;
}

export interface CartItem {
  id: string;
  dish: Dish;
  quantity: number;
  selectedOptions: SelectedOptions;
  lineTotal: number;
}

export interface DeliveryArea {
  id: string;
  name: string;
  fee: number;
  eta: string;
}

export interface CustomerInfo {
  name: string;
  phone: string;
  email: string;
  deliveryArea: string;
  address: string;
  landmark: string;
  deliveryTime: 'asap' | 'scheduled';
  scheduledDate?: string;
  scheduledTime?: string;
}

export interface Order {
  ref: string;
  customer: CustomerInfo;
  items: CartItem[];
  subtotal: number;
  deliveryFee: number;
  total: number;
  paymentStatus: 'pending' | 'success' | 'failed';
  createdAt: string;
}
