import "./App.css";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import { CFSCard } from "./components/Card";
import { CFSButton } from "./components/Button";

function App() {
  return (
    <div className="p-8  bg-zinc-50 ">
      <div className="flex flex-row ">
        <div className="basis-1/2 p-12 bg-white rounded-l-2xl ">
          <div className="w-96 text-neutral-600 text-xl font-medium font-['IBM Plex Sans'] leading-loose">
            Are you still working?
          </div>
          <div></div>
        </div>
        <div className="basis-1/2 p-12 bg-zinc-100 rounded-r-2xl">
          asdasdsads
        </div>
      </div>
      <div className="flex flex-row mt-6">
        <div className="basis-1/2 flex flex-row gap-3">
          <CFSButton type="secondary">Back</CFSButton>
          <CFSButton>Continue</CFSButton>
        </div>
        <div className="basis-1/2 flex  flex-row-reverse gap-3">
          <CFSButton type="secondary">Save for later</CFSButton>
        </div>
      </div>
      <div className="flex flex-row mt-6">
        <div className="basis-2/8 bg-red-400">A</div>
        <div className="basis-3/8 bg-blue-500">B</div>
      </div>
      <div className="m-10">
        <CFSCard>
          <CardHeader>Heading</CardHeader>
          <CardBody>123</CardBody>
        </CFSCard>
        <div className="m-2">
          <CFSButton>Start application</CFSButton>
        </div>
        <div className="m-2">
          <CFSButton type="secondary">Back</CFSButton>
        </div>
        <div className="m-2">
          <CFSButton type="secondary">Continue</CFSButton>
        </div>
      </div>
      <div className="bg-blue-300">
        <div className="text-medium font-bold md:text-2xl">
          What is Lorem Ipsum?
        </div>
        <div className="text-large ">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </div>
      </div>
    </div>
  );
}

export default App;
