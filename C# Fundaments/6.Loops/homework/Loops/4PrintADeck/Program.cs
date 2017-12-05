using System;

public class PrintADeck
{
    public static void Main()
    {
        string cardFace = Console.ReadLine().ToUpper();
        int length = 0;

        // Convert face cards into thier number order

        switch (cardFace)
        {
            case "J":
                length = 11;
                break;
            case "Q":
                length = 12;
                break;
            case "K":
                length = 13;
                break;
            case "A":
                length = 14;
                break;
            default:
                length = int.Parse(cardFace);
                break;
        }

        for (int i = 2; i <= length; i++)
        {
            cardFace = string.Empty;
            // Convert then numbers of the cards back to their letters
            switch (i)
            {
                case 11:
                    cardFace = "J";
                    break;
                case 12:
                    cardFace = "Q";
                    break;
                case 13:
                    cardFace = "K";
                    break;
                case 14:
                    cardFace = "A";
                    break;
                default:
                    cardFace = string.Empty + i;
                    break;
            }

            string output = "{0} of spades, {0} of clubs, {0} of hearts, {0} of diamonds";
            Console.WriteLine(output, cardFace);
        }
    }
}