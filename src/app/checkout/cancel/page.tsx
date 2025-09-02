import Link from "next/link";

import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const CancelPage = () => {
  return (
    <div>
      <Header />
      <div className="px-5">
        <Card>
          <CardHeader>
            <CardTitle>Pagamento cancelado</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm font-medium">
              Seu pagamento foi cancelado. Você pode tentar novamente ou
              continuar comprando.
            </p>
          </CardContent>
          <CardFooter className="flex gap-2">
            <Button variant="outline" asChild>
              <Link href="/">Página inicial</Link>
            </Button>
            <Button asChild>
              <Link href="/cart/confirmation">Voltar para o carrinho</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
      <div className="mt-12">
        <Footer />
      </div>
    </div>
  );
};

export default CancelPage;
