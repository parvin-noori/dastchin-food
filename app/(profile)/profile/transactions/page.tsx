import { FiCalendar } from "react-icons/fi";
import { IoMdTime } from "react-icons/io";
import { SiTicktick } from "react-icons/si";

export default function Transactions() {
  const transactions = [
    {
      number: 12,
      price: 37000,
      type: "پرداخت آنلاین",
      status: "موفق",
    },
    {
      number: 11,
      price: 30000,
      type: "پرداخت آنلاین",
      status: "موفق",
    },
    {
      number: 18,
      price: 39000,
      type: "پرداخت آنلاین",
      status: "موفق",
    },
    {
      number: 10,
      price: 29000,
      type: "پرداخت آنلاین",
      status: "موفق",
    },
    {
      number: 9,
      price: 20000,
      type: "پرداخت آنلاین",
      status: "موفق",
    },
    {
      number: 21,
      price: 40000,
      type: "پرداخت آنلاین",
      status: "موفق",
    },
  ];
  return (
    <div className="gap-y-10 flex flex-col">
      <span className="font-semibold text-xl">لیست تراکنش ها</span>
      <p className="!text-black">
        در پرداخت‌های ناموفق بانکی اگر مبلغ از حسابتان کسر شود، معمولاً در کمتر
        از یک ساعت و نهایتاً تا ۷۲ ساعت به حساب شما برگردانده خواهد شد.
      </p>
      <ul className="divide-y divide-gray-200">
        {transactions.map((transaction, index) => (
          <li
            key={index}
            className="flex items-center justify-between w-full p-5"
          >
            <div className="flex flex-col gap-3">
              <strong>سفارش شماره {transaction.number}</strong>
              <div className="flex items-center gap-2">
                <span>{transaction.type}</span>
                <span className="bg-green-100/50 flex items-center gap-1 text-green-700 text-sm px-2 py-1 rounded-full">
                  <SiTicktick /> {transaction.status}
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-3 items-end">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1 text-sm">
                  <FiCalendar className="text-gray-400" /> چهارشنبه٬ ۲۱ اردیبهشت
                </span>
                <span className="flex items-center gap-1 text-sm">
                  <IoMdTime className="text-gray-400" /> ۲۱:۴۷
                </span>
              </div>
              <strong>{transaction.price.toLocaleString()} تومان</strong>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
