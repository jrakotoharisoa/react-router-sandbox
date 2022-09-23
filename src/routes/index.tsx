import {
  ActionFunction,
  Form,
  LoaderFunction,
  redirect,
  useActionData,
  useLoaderData,
  useNavigation,
} from "react-router-dom";

export const loader: LoaderFunction = async () => {
  return [];
};

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  if (formData.get("text") === "") {
    return { error: "Field required" };
  }
  return redirect("/day/next");
};



export default function Index() {
  const actionData = useActionData();
  const loaderData = useLoaderData();
  return (
    <>
      <div>Loader data: {JSON.stringify(loaderData)}</div>
      <div>Action data: {JSON.stringify(actionData)}</div>
      <Form method="put">
        <label>
          Label:
          <input type="text" name="text"  />
        </label>
        <button type="submit">Submit</button>
      </Form>
    </>
  );
}
