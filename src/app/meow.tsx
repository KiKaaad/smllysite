'use client'

import { useEffect } from "react"
import { useSession } from "next-auth/react"

interface ExtendedNavigator extends Navigator {
    deviceMemory?: number;
}

interface ExtendedSession {
    user: {
        id: string;
        username?: string | null;
        isOnboarded?: boolean;
        name?: string | null;
        email?: string | null;
        image?: string | null;
    }
}

export function ConsoleWelcome() {
    const { data } = useSession()
    const session = data as unknown as ExtendedSession | null

    useEffect(() => {
        const showFastfetch = () => {
            const nav = navigator as ExtendedNavigator;
            const ram = nav.deviceMemory ? `${nav.deviceMemory}` : "unknown";
            const cores = nav.hardwareConcurrency || "unknown";
            const platform = nav.platform;

            const art = `
               -.                            .-##                
               ######-                    -######.               
               ##########-    ......  .+#########-               
               ####-+######################+.####-               
               ####.-#######################-####.               
               +#################################.               
               .#################################                
               -#################################-               
              .############+..     ..+############.              
              ############.           .############              
             .###########               ###########.             
             .##########+               +##########-    smllyCreated         
        ..--..###########               ###########-    meow :з         
       +#################-             -###########.             
      -###.-##############+.         .+###########+              
      .++-  .################+-----+##############.              
              +##################################.               
               .-##############################+                 
                  .###########################.                  
                     -#####################-                     
                        .-+###########+-.                        
            `;

            console.log("%csmlly connected...", "color: #12c41b; font-weight: bold;");
            console.log(`%c${session?.user?.username || 'guest'}%c@%csmlly%c:~$ %csmlly --version`,
                "color: #12c41b; font-weight: bold;", "color: white;", "color: #12c41b; font-weight: bold;", "color: white;", "color: #22c55e;");
            console.log("");
            console.log("%cAuthor:%c KiKa | t.me/kikaaad", "color: #12c41b;", "color: #ed95f0;");
            console.log("%cBrowser:%c " + navigator.userAgent.split(' ').pop(), "color: #12c41b;", "color: white;");
            console.log(`%cCPU:%c ${cores} cores`, "color: #12c41b;", "color: white;");
            console.log(`%cRAM:%c ~${ram} GB`, "color: #12c41b;", "color: white;");
            console.log(`%cPlatform:%c ${platform}`, "color: #12c41b;", "color: white;");
            console.log(`%c${art}`, "color: #12c41b;");

            return "";
        };

        try {
            Object.defineProperty(window, 'fastfetch', {
                get: showFastfetch,
                configurable: true
            });
            console.log("%c[info] %cTerminal ready. Type %cfastfetch %cto begin.", "color: #22c55e;", "color: #71717a;", "color: white; font-weight: bold;", "color: #71717a;");
        } catch (e) {}

    }, [session]);

    return null;
}
