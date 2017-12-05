using System;


namespace _14.Print_ASCII_Table
{
    class Program
    {
        static void Main()
        {

            for (int i = 33; i <= 126; i++)
            {
                char symbol = (char)i;
                Console.WriteLine(symbol);
            }

        }
    }
}
