import Home from "./views/home";

export default function App() {
  return (
    //  @ts-expect-error Server Component
    <Home />
  );
}
