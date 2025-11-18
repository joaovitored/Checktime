import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Vector } from "@/components/ui/Vector";

interface AuthLayoutProps {
  children: React.ReactNode;
  className?: string;
  reversed?: boolean;
}

export function AuthLayout({ children, className, reversed = false, ...props }: AuthLayoutProps & React.ComponentProps<"div">) {
  return (
    
    <div
      className={cn("h-/100vh flex items-center justify-center overflow-hidden", className)}
      {...props}
    >
      <Card className="w-[80vw] h-/100vh rounded-[30px]">
        <CardContent className="grid p-0 md:grid-cols-2 h-full">

          {reversed ? (
            <>
              {/* Lado esquerdo: imagem */}
              <div className="flex items-center justify-center bg-white rounded-2xl p-6 md:p-8">
                <Vector />
              </div>

              {/* Lado direito: conteúdo */}
              <div className="p-6 md:p-8 flex items-center">
                {children}
              </div>
            </>
          ) : (
            <>
              {/* Lado esquerdo: conteúdo */}
              <div className="p-6 md:p-8 flex items-center">
                {children}
              </div>

              {/* Lado direito: imagem */}
              <div className="flex items-center justify-center bg-white rounded-2xl p-6 md:p-8">
                <Vector />
              </div>
            </>
          )}
          

        </CardContent>
      </Card>
    </div>
  );
}
