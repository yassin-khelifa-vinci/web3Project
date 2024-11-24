
import { SelectContent, Select, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useRouter } from "next/navigation";
import { ChangeEvent, use, useTransition } from "react";
import { useLocale } from "next-intl";
import { usePathname } from "next/navigation";

export default function Footer() {

    const [isPending, startTransition] = useTransition();
    const router = useRouter();
    const localActive = useLocale();
    const pathName = usePathname();
    const path = pathName.split('/')[2];
    
    const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const nextLocale = e.target.value;
        if (path === undefined) {
            startTransition(() =>{
                router.replace(`/${nextLocale}`);
        }
        );
        }else{
            startTransition(() => {
                router.replace(`/${nextLocale}/${path}`);
        })
    }
        
    }

    return(
        <>
            <div className="border-t-1">
                <div className="bottom-0 right-0 m-4 w-auto">
                    <label>
                        <p className="sr-only">change language</p>
                        <select defaultValue={localActive} className="bg-transparent py-2" onChange={onSelectChange}>
                            <option value="fr">Français</option>
                            <option value="en">English</option>
                        </select>
                    </label>
                </div>
            </div>
        </>
    )
};