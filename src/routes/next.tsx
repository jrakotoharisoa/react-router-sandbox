import {
  ActionFunction,
  Form,
  redirect,
  useActionData,
} from "react-router-dom";

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  if (formData.get("text") === "") {
    return { error: true };
  }
  return redirect("/");
};

export default function Next() {
  const actionData = useActionData();
  return (
    <>
      <div>Action data: {JSON.stringify(actionData)}</div>
      <Form method="put">
        <label>
          Step 2:
          <input type="text" name="text" />
        </label>
        <button type="submit">Submit</button>
      </Form>
    </>
  );
}
