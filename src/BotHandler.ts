/*
    Handle all the commands from the input and return them with correct commands 
*/

export abstract class BotHandler{
    private static dictionary: Map<string, number> = new Map([["help", 1],
                                                                ["players", 2],
                                                                ["leave", 3]]);

    public static getResponse(input: string): string {
        input = input.toLowerCase();
        const option: number | undefined = BotHandler.dictionary.get(input);

        if (option == undefined) {
            return "Invalid command";
        }

        //placement holders till I interate API
        let result: string = "";
        switch (option) {
            case 1:
                result = "See list for more commands";
                break;
            case 2:
                result = "Number of players online: ";
                break;
            case 3:
                result = "leave now with exit";
                break;
        }
        return result;  
    }
}