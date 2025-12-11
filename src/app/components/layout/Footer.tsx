import React from "react";
import Container from "../ui/Container";

export default function Footer() {
  return (
    <footer className="py-10 border-t bg-gray-50 mt-20">
      <Container className="text-center text-gray-600">
        <p className="font-medium">Flowrise Clone</p>
        <p className="text-sm mt-2">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
