using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _2.GoingToPArty
{
    class Program
    {
        static void Main()
        {

            var directions = Console.ReadLine(); ; // "abcAk^zzz^";

            var i = 0;

            while (0 <= i && i < directions.Length)
            {
                var symbol = directions[i];

                if (char.IsUpper(symbol))
                {
                    i -= symbol - 'A' + 1;
                }
                else if (char.IsLower(symbol))
                {
                    i += symbol - 'a' + 1;
                }
                else if (symbol == '^')
                {
                    Console.WriteLine("Djor and Djano are at the party at {0}!", i);
                    return;
                }
            }
            Console.WriteLine("Djor and Djano are lost at {0}!", i);
        }
        
    }
}
