import { error } from "console";
import Link from "next/link";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
const getitems = async () => {
  const res = await fetch(
    `https://cdn.contentful.com/spaces/${process.env.contentfulSpaceID}/entries?access_token=${process.env.contentfulAccessKey}&content_type=eitems`,
    { cache: "no-store" }
  );
  if (!res.ok) {
    throw new Error(`some error are occur in server`);
  }
  return res.json();
};
const Home = async () => {
  const eproduct = await getitems();

  return (
    <div className="container grid grid-cols-4 gap-8 bg-slate-800  px-16 ">
      {eproduct.items.map((pdata: any) => (
        <Link href={`/}`} key={pdata.sys.id} className="">
          <div className=" max-w-[300px]  my-4  ">
            {eproduct.includes.Asset.map((elem: any) => (
              <div>
                {pdata.fields.image.sys.id == elem.sys.id && (
                  <img
                    src={"https:" + elem.fields.file.url}
                    alt=""
                    className=" rounded-t-md h-[200px] object-cover"
                    width={400}
                    height={400}
                  />
                )}
              </div>
            ))}
            <div className="h-[210px] p-4 bg-white rounded-b-md">
              <h2 className="text-2xl font-semibold"> {pdata.fields.title}</h2>
              <div className="text-lg mt-2">
                Description:
                {pdata.fields.description}
              </div>
              <p className="font-bold text-xl mt-2 pb-4">
                {" "}
                Rs:{pdata.fields.price}$
              </p>
              <a href="#">Read more</a>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};
export default Home;
