"use server";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

function isInvalidText(text) {
  return !text || text.trim() === "";
}

export async function shareMeal(prevState, formData) {
  try {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const meal = {
      title: formData.get("title"),
      summary: formData.get("summary"),
      instructions: formData.get("instructions"),
      image: formData.get("image"),
      creator: formData.get("name"),
      creator_email: formData.get("email"),
    };

    if (
      isInvalidText(meal.title) ||
      isInvalidText(meal.summary) ||
      isInvalidText(meal.instructions) ||
      isInvalidText(meal.creator) ||
      isInvalidText(meal.creator_email) ||
      !meal.creator_email.includes("@") ||
      !meal.image ||
      meal.image.size === 0
    ) {
      return {
        message: "Invalid input. Please check all fields are filled correctly.",
      };
    }

    console.log("Demo mode: Simulating meal submission:", meal.title);

    redirect("/meals?demo=success");
  } catch (error) {
    console.error("Error in demo share meal:", error);
    return {
      message:
        "This is a demo website. In a real app, your meal would be saved to a database.",
    };
  }
}
