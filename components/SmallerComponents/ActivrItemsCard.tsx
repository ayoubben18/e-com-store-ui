import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
} from "@/components/ui/table";
import ActiveItem from "../MappingCompenents/ActiveItem";
import { createClient } from "@/utils/supabase/server";
import { getUserOrders } from "@/db/service/orders-service";
export default async function ActiveItemsCard() {
  const orders = await getUserOrders();
  if (!orders) {
    return null;
  }
  return (
    <div className="col-span-2 w-full space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>
            <div className="flex items-center gap-2">
              <span>History</span>
              <div className="inline-flex items-center gap-2 rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800 dark:bg-green-900 dark:text-green-300">
                {orders.length}
              </div>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Item</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orders.map((order, i) => (
                <ActiveItem key={i} order={order} i={i + 1} />
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
