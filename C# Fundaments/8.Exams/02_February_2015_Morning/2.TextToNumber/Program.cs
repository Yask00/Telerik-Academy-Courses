using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _2.TextToNumber
{
    class Program
    {
        static void Main(string[] args)
        {

            int mNumber = int.Parse(Console.ReadLine());

            string input = Console.ReadLine();
            int result = 0;
            

            for (int i = 0; i < input.Length; i++)
            {
                char symbol = input[i];

                if (symbol >= 48 && symbol <= 57)
                {
                    result *= (symbol - 48);
                }

                else if (symbol >= 65 && symbol <= 90)
                {
                    result += (symbol - 65);
                }

                else if (symbol >= 97 && symbol <= 122)
                {
                    result += (symbol - 97);
                }

                else if (symbol == 64)
                {
                    break;
                }
                else
                {
                    result %= mNumber;
                }
            }


            Console.WriteLine(result);
            
        }
    }
}
