import React from "react";
import TopNav from "~/pages/components/jpComponents/TopNav";
import StickyFooter from "~/pages/components/jpComponents/StickyFooter";
import { useUser } from "@clerk/nextjs";
import { useState } from "react";
import { api, type RouterOutputs } from "~/utils/api";

const Jono2 = () => {
  const { user } = useUser();

  return (
    <div>
      <main className="flex min-h-screen flex-col items-center justify-start bg-gradient-to-b from-[#09090b] to-[#d4d4d8]">
        <div>
          <div>
            <TopNav />
            <div className="p-2 text-3xl font-bold text-white">
              <span>Current user:</span>
              {user?.firstName ? (
                <span>
                  {" "}
                  {user?.firstName} {user?.id}
                </span>
              ) : (
                ""
              )}
            </div>
            <div>
              <Content />
            </div>
            <div className="mb-4 flex h-96 flex-col items-center justify-center rounded-lg bg-gradient-to-b from-[#4f7369] to-[#A7F2E4]">
              <div className="flex flex-row bg-white p-6">
                <button className="delay-50 m-2 flex max-w-xs flex-col gap-4 rounded-xl bg-[#0284c7] p-4 text-white text-white drop-shadow-md transition duration-100 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-[#082f49]">
                  BUTTON ONE
                </button>
                <button className="delay-50 m-2 flex max-w-xs flex-col gap-4 rounded-xl bg-[#0284c7] p-4 text-white text-white drop-shadow-md transition duration-100 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-[#082f49]">
                  BUTTON TWO
                </button>
                <button className="delay-50 m-2 flex max-w-xs flex-col gap-4 rounded-xl bg-[#0284c7] p-4 text-white text-white drop-shadow-md transition duration-100 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-[#082f49]">
                  BUTTON THREE
                </button>
                <button className="delay-50 m-2 flex max-w-xs flex-col gap-4 rounded-xl bg-[#0284c7] p-4 text-white text-white drop-shadow-md transition duration-100 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-[#082f49]">
                  BUTTON FOUR
                </button>
                <button className="delay-50 m-2 flex max-w-xs flex-col gap-4 rounded-xl bg-[#0284c7] p-4 text-white text-white drop-shadow-md transition duration-100 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-[#082f49]">
                  BUTTON FIVE
                </button>
              </div>
            </div>
          </div>
          <div className="relative flex h-20 items-center justify-center bg-gray-600">
            <StickyFooter />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Jono2;

type Topic = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string;
  userId: string;
};

const Content: React.FC = () => {
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);
  const { data: topics, refetch: refetchTopics } = api.topic.getAll.useQuery(
    undefined, // no input
    {
      onSuccess: (data) => {
        if (data && data.length > 0 && data[0]) {
          setSelectedTopic(data[0]);
        } else {
          setSelectedTopic(null);
        }
      },
    }
  );

  const createTopic = api.topic.create.useMutation({
    onSuccess: () => {
      void refetchTopics();
    },
  });

  return (
    <div className="mb-4 mt-4 flex flex-col items-start justify-center rounded-lg border-slate-100 bg-white p-4">
      <div className="col-span-3">
        {selectedTopic && (
          <div className="m-2 rounded-lg border-2 p-4">
            Selected topic: {selectedTopic.title}
          </div>
        )}
      </div>
      <div className="col-span-3">
        <ul className="menu m-2 rounded-lg border-2 p-4">
          {topics?.map((topic) => (
            <li key={topic.id}>
              <a
                href="#"
                onClick={(evt) => {
                  evt.preventDefault();
                  setSelectedTopic(topic);
                }}
              >
                {topic.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="divider"></div>
      <input
        type="text"
        placeholder="New Topic"
        className="input-bordered input input-sm w-full"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            createTopic.mutate({
              title: e.currentTarget.value,
            });
            e.currentTarget.value = "";
          }
        }}
      />
    </div>
  );
};
