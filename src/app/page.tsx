import { orders } from "@/mocks";
import { menus } from "@/mocks";
import {
  Banner,
  CartWidget,
  MenuSlide,
  OrdersList,
  StatsGrid,
} from "@/components";

export default function Home() {
  return (
    <div className="flex flex-col gap-6 lg:flex-row md:gap-10 md:mt-6">
      <main className="flex flex-1 flex-col space-y-6">
        <Banner />

        <MenuSlide title="Categories" menus={menus} />

        <OrdersList orders={orders} />
      </main>

      <aside className="w-full px-6 lg:w-80 md:px-0">
        <StatsGrid />

        <CartWidget />
      </aside>
    </div>
  );
}
