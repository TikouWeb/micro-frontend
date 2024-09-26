import React, { Suspense, useCallback, useState } from "react";
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
  const [todosCount, setTodosCount] = useState(null);

  const onTodosChanged = useCallback((newTodos, oldTodos) => {
    console.log(newTodos.length);

    setTodosCount(newTodos.length);
  }, []);

  return (
    <div className="px-2">
      <h1 className="text-2xl font-bold mx-2 my-4">App</h1>
      <div className="flex gap-3">
        <div className="flex gap-3 flex-col w-4/12">
          <Suspense fallback={<SkeletonChildrenDemo />}>
            <VueComponent />
          </Suspense>

          <Suspense fallback={<SkeletonChildrenDemo />}>
            <div>
              <ReactMicrofrontend todosCount={todosCount} />
            </div>
          </Suspense>
        </div>

        <div className="w-8/12">
          <Suspense fallback={<SkeletonChildrenDemo />}>
            <VueTodoList
              title="Vue Todo List"
              onTodosChanged={onTodosChanged}
            />
          </Suspense>
        </div>
      </div>
    </div>
  );
}

export default App;
