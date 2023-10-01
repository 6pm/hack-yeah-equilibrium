"use client";
import { Button, Card, CardBody, CardFooter, Image } from "@nextui-org/react";

const list = [
  {
    title: "Book",
    img: "/images/shop/i1.jpeg",
    price: "10 coins",
  },
  {
    title: "Badge",
    img: "/images/shop/i2.jpeg",
    price: "15 coins",
  },
  {
    title: "Ticket",
    img: "/images/shop/i3.jpeg",
    price: "25 coins",
  },
  {
    title: "Case",
    img: "/images/shop/i4.jpeg",
    price: "25 coins",
  },
  {
    title: "Shopper",
    img: "/images/shop/i5.jpeg",
    price: "30 coins",
  },
  {
    title: "Pens",
    img: "/images/shop/i6.jpeg",
    price: "50 coins",
  },
  {
    title: "Stickers",
    img: "/images/shop/i7.jpeg",
    price: "10 coins",
  },
  {
    title: "T-shirt",
    img: "/images/shop/i8.jpeg",
    price: "50 coins",
  },
];

export default function Shop() {
  // useEffect(() => {
  //   (async () => {
  //     const data = await getShoppingItems();
  //     console.log("data", data);
  //     // setShopItems(quizzes);
  //     // setLoading(false);
  //   })();
  // }, []);

  return (
    <div className="gap-4 grid grid-cols-2 sm:grid-cols-4">
      {list.map((item, index) => (
        <Card
          shadow="sm"
          key={index}
          isPressable
          onPress={() => console.log("item pressed")}
        >
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt={item.title}
              className="w-full object-cover h-[200px]"
              src={item.img}
            />
          </CardBody>
          <CardFooter className="flex flex-col text-small justify-between">
            <div className="flex justify-between w-full mb-2">
              <b>{item.title}</b>
              <p className="text-default-500">{item.price}</p>
            </div>
            <Button size="sm">Cooming soon</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
