import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Separator } from "../ui/separator";
import CheckoutButton from "./CheckoutButton";

interface Props {
  totalPrice: number;
  ordersIds: string[];
}

export default function OrderSummaryComponent({
  totalPrice,
  ordersIds,
}: Props) {
  const shipping = 5;
  return (
    <Card>
      <CardHeader>
        <CardTitle>Order Summary</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="flex items-center justify-between">
          <div>Subtotal</div>
          <div className="font-medium">$ {totalPrice}</div>
        </div>
        <div className="flex items-center justify-between">
          <div>Shipping</div>
          <div className="font-medium">$ {shipping}</div>
        </div>
        <Separator />
        <div className="flex items-center justify-between font-medium">
          <div>Total</div>
          <div>$ {totalPrice + shipping}</div>
        </div>
      </CardContent>
      <CardFooter>
        <CheckoutButton totalPrice={totalPrice} ordersIds={ordersIds} />
      </CardFooter>
    </Card>
  );
}
