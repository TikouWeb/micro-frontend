import React, { Suspense } from "react";
import VueWrapper from "./components/vue-wrapper";
import { SkeletonChildrenDemo } from "./components/skeleton";

const VueComponent = React.lazy(() =>
  import("vueMicroApp/vue-component"!).then((module) => ({
    default: (props: any) => (
      <VueWrapper component={module.default} {...props} />
    ),
  }))
);

const VueTodoList = React.lazy(() =>
  import("vueMicroApp/vue-todo-list"!).then((module) => ({
    default: (props: any) => (
      <VueWrapper component={module.default} {...props} />
    ),
  }))
);

const ReactMicrofrontend = React.lazy(
  () => import("reactMicroApp/react-component"!)
);

function App() {
  return (
    <div className="px-4">
      <h1 className="text-2xl font-bold mx-2 my-4">
        Micro fontend (Powered By React)
      </h1>
      <div className="flex gap-6">
        <div className="flex gap-6 flex-col w-4/12">
          <Suspense fallback={<SkeletonChildrenDemo />}>
            <div className="w-full p-4 shadow-md rounded-md">
              <h5 className="text-xl mb-2">Powered By Vue</h5>
              <VueComponent />
            </div>
          </Suspense>

          <Suspense fallback={<SkeletonChildrenDemo />}>
            <div className="w-full p-4 shadow-md rounded-md">
              <h5 className="text-xl mb-2">Powered By Vue</h5>
              <VueTodoList />
            </div>
          </Suspense>
        </div>

        <div className="w-8/12">
          <Suspense fallback={<SkeletonChildrenDemo />}>
            <div>
              <ReactMicrofrontend />
            </div>
          </Suspense>
        </div>
      </div>
    </div>
  );
}

export default App;
