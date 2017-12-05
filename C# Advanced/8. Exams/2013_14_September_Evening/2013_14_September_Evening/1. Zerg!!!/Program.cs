using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _1.Zerg___
{
    class Program
    {
        static void Main(string[] args)
        {
            var alphabet = new List<string>
                { "Rawr","Rrrr", "Hsst", "Ssst", "Grrr", "Rarr",
                  "Mrrr","Psst","Uaah","Uaha","Zzzz","Bauu","Djav","Myau","Gruh" }; //building array

            var input = Console.ReadLine();

            long/*var*/ decimalRepresentation = 0;
            // Sub Array with Length 3...
            for (int i = 0; i < input.Length; i += 4) //Jump 4 Symbols
            {
                var digitIn13 = input.Substring(i, 4);
                var decimalValue = alphabet.IndexOf(digitIn13);

                decimalRepresentation *= 15;
                decimalRepresentation += decimalValue;
            }
            Console.WriteLine(decimalRepresentation);
        }
    }
}
