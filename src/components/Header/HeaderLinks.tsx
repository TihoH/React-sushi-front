import { Link, useParams } from "react-router-dom";

const HeaderLinks = () => {
  const { name } = useParams();


  const links = [
    { link: "Сети", id: 1, category: "sets" },
    { link: "Роли та суші", id: 2, category: "rols" },
    { link: "Акції", id: 3, category: "stock" },
    { link: "1+1=3", id: 4 , category: 'plusSushi' },
    { link: "Комбо", id: 5 , category: 'combo' },
    { link: "Суші бургери", id: 6 , category: 'sushiBurger' },
    { link: "Гаряче та супи", id: 7 , category: 'hotEndSoup' },
    { link: "Салати та закуски", id: 8 , category: '' },
    { link: "Десерти", id: 9 , category: 'salad' },
    { link: "Напої", id: 10 , category: 'drink' },
    { link: "Доповнення", id: 11 , category: 'adedToOrder'},
  ];
  return (
    <ul className=" flex justify-between text-myTextGray px-7 font-medium shadow-lg  -mx-[calc((100vw-100%)/2)]">
      {links.map((item) => (
        <li className="hover:text-yellow-600 transition py-4" key={item.id}>
          <Link
            className={` ${name === item.category ? "text-yellow-600" : ""} `}
            to={`/category/${item.category}`}
          >
            {item.link}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default HeaderLinks;
