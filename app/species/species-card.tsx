"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import type { Database } from "@/lib/schema";
import Image from "next/image";
import { useState } from "react";
type Species = Database["public"]["Tables"]["species"]["Row"];

export default function SpeciesCard(species: Species) {
  const [open, setOpen] = useState<boolean>(false);

  // const edit_species = () => {
  //   if (species.author == userId) {
  //     return <Message props={{ variant: "info" }}>You have passed the test!</Message>;
  //   } else if (score === 90) {
  //     return <Message props={{ variant: "primary" }}>Good Job! You have passed the test!</Message>;
  //   } else if (score === 100) {
  //     return <Message props={{ variant: "success" }}>Great Job! You Nailed it!</Message>;
  //   }
  //   return <Message props={{ variant: "warning" }}>Please enter your score</Message>;
  // };

  return (
    <div className="min-w-72 m-4 w-72 flex-none rounded border-2 p-3 shadow">
      {species.image && (
        <div className="relative h-40 w-full">
          <Image src={species.image} alt={species.scientific_name} fill style={{ objectFit: "cover" }} />
        </div>
      )}
      <h3 className="mt-3 text-2xl font-semibold">{species.common_name}</h3>
      <h4 className="text-lg font-light italic">{species.scientific_name}</h4>
      <p>{species.description ? species.description.slice(0, 150).trim() + "..." : ""}</p>
      {/* Replace with detailed view */}

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button className="mt-3 w-full" onClick={() => setOpen(true)}>
            Learn More
          </Button>
        </DialogTrigger>
        <DialogContent className="max-h-screen overflow-y-auto sm:max-w-[600px]">
          <h1 style={{ fontSize: 40 }}>
            <b>{species.common_name}</b>
          </h1>
          <p>
            <b>Kingdom: </b>
            {species.kingdom}
          </p>
          <p>
            <b>Scientific Name: </b>
            {species.scientific_name}
          </p>
          {species.total_population === null ? (
            <p>
              <b>Total Population: </b> Unknown{" "}
            </p>
          ) : (
            <p>
              <b>Total Population: </b>
              {species.total_population}
            </p>
          )}
          <p>
            <b>Description: </b>
            {species.description}
          </p>
          <h3>
            <i>Author: </i>
          </h3>
          <div className="flex">
            <Button type="button" className="ml-1 mr-1 flex-auto" variant="secondary" onClick={() => setOpen(false)}>
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button className="mt-3 w-full" onClick={() => setOpen(true)}>
            Edit
          </Button>
        </DialogTrigger>
        <DialogContent className="max-h-screen overflow-y-auto sm:max-w-[600px]">
          <h1 style={{ fontSize: 40 }}>
            <b>{species.common_name}</b>
          </h1>
          <p>
            <b>Kingdom: </b>
            {species.kingdom}
          </p>
          <p>
            <b>Scientific Name: </b>
            {species.scientific_name}
          </p>
          {species.total_population === null ? (
            <p>
              <b>Total Population: </b> Unknown{" "}
            </p>
          ) : (
            <p>
              <b>Total Population: </b>
              {species.total_population}
            </p>
          )}
          <p>
            <b>Description: </b>
            {species.description}
          </p>
          <h3>
            <i>Author: </i>
          </h3>
          <div className="flex">
            <Button type="button" className="ml-1 mr-1 flex-auto" variant="secondary" onClick={() => setOpen(false)}>
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
