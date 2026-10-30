"use client";

import { useState } from "react";
import { SaveIcon, Trash2Icon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const CATEGORIES = [
    "Beach",
    "Mountain",
    "Adventure",
    "Cultural",
    "Honeymoon",
    "City Tour",
    "Wildlife",
    "Cruise",
] as const;

const initialForm = {
    name: "",
    country: "",
    category: "",
    price: "",
    duration: "",
    departureDate: "",
    imageUrl: "",
    description: "",
};

const AddDestinationPage = () => {
    const [form, setForm] = useState(initialForm);
    const [submitted, setSubmitted] = useState(false);

    const setField = (field: keyof typeof initialForm, value: string) => {
        setForm((prev) => ({ ...prev, [field]: value }));
        setSubmitted(false);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("New travel package:", form);
        setForm(initialForm);
        setSubmitted(true);

        const res = await fetch("http://localhost:8000/add-destination", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(form)
        })

        const data = await res.json()
        console.log(data);
    };

    const handleCancel = () => {
        setForm(initialForm);
        setSubmitted(false);
    };

    return (
        <main className="flex-1 px-4 py-10 md:px-8">
            <h1 className="font-heading text-4xl font-medium tracking-tight md:text-5xl">
                Add New Destination
            </h1>

            <Card className="mx-auto mt-12 w-full max-w-2xl py-6 shadow-lg ring-1 sm:py-8">
                <CardContent className="px-6 sm:px-8">
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="space-y-2">
                            <Label htmlFor="name">Destination Name</Label>
                            <Input
                                id="name"
                                placeholder="Bali Paradise"
                                value={form.name}
                                onChange={(e) => setField("name", e.target.value)}
                                required
                            />
                        </div>

                        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                            <div className="space-y-2">
                                <Label htmlFor="country">Country</Label>
                                <Input
                                    id="country"
                                    placeholder="Indonesia"
                                    value={form.country}
                                    onChange={(e) => setField("country", e.target.value)}
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="category">Category</Label>
                                <Select
                                    value={form.category}
                                    onValueChange={(value) => setField("category", value ?? "")}
                                >
                                    <SelectTrigger id="category" className="w-full">
                                        <SelectValue placeholder="Beach" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {CATEGORIES.map((category) => (
                                            <SelectItem key={category} value={category}>
                                                {category}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                            <div className="space-y-2">
                                <Label htmlFor="price">Price (USD)</Label>
                                <Input
                                    id="price"
                                    type="number"
                                    min={0}
                                    placeholder="e.g., 1299"
                                    value={form.price}
                                    onChange={(e) => setField("price", e.target.value)}
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="duration">Duration</Label>
                                <Input
                                    id="duration"
                                    placeholder="e.g., 7 Days/6 Nights"
                                    value={form.duration}
                                    onChange={(e) => setField("duration", e.target.value)}
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="departureDate">Departure Date</Label>
                            <Input
                                id="departureDate"
                                type="date"
                                value={form.departureDate}
                                onChange={(e) => setField("departureDate", e.target.value)}
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="imageUrl">Image URL</Label>
                            <Input
                                id="imageUrl"
                                type="url"
                                placeholder="https://example.com/image.jpg"
                                value={form.imageUrl}
                                onChange={(e) => setField("imageUrl", e.target.value)}
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="description">Description</Label>
                            <Textarea
                                id="description"
                                placeholder="Describe the travel experience..."
                                value={form.description}
                                onChange={(e) => setField("description", e.target.value)}
                                className="min-h-28"
                            />
                        </div>

                        <div className="flex flex-wrap items-center justify-end gap-3 pt-2">
                            {submitted && (
                                <p className="mr-auto text-sm text-muted-foreground">
                                    Package added successfully!
                                </p>
                            )}

                            <Button
                                type="button"
                                variant="outline"
                                size="lg"
                                onClick={handleCancel}
                                className="h-10 px-6 text-destructive hover:bg-destructive/10 hover:text-destructive"
                            >
                                <Trash2Icon data-icon="inline-start" />
                                Cancel
                            </Button>

                            <Button
                                type="submit"
                                size="lg"
                                className="h-10 bg-cyan-600 px-6 text-white hover:bg-cyan-700"
                            >
                                <SaveIcon data-icon="inline-start" />
                                Add Travel Package
                            </Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </main>
    );
};

export default AddDestinationPage;
