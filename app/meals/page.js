import Link from "next/link";
import classes from "./page.module.css";
import MealsGrid from "@/components/meals/meals-grid";
import { Suspense } from "react";
import { getMeals } from "@/lb/meals";

async function Meals() {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
}

export const metadata = {
  title: "Yummy Meals",
  description: "Browse the delicious meals, shared by our community.",
};

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function MealsPage({ searchParams }) {
  const showSuccessMessage = searchParams.demo === "success";

  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created{` `}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>
          Choose your favourite recipe and cook it yourself. it is easy and fun!
        </p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share Your Favourite Recipe</Link>
        </p>
      </header>

      <main className={classes.main}>
        <Suspense
          fallback={<div className={classes.loading}>Fetching meals...</div>}
        >
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
