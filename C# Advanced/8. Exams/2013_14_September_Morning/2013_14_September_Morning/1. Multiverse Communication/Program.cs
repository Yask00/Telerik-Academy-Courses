using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _1.Multiverse_Communication
{
    class Program
    {
        static void Main()
        {
            var alphabet = new List<string>
                { "CHU","TEL", "OFT", "IVA", "EMY", "VNB",
                  "POQ","ERI","CAD","K-A","IIA","YLO","PLA" }; //building array

            var input = Console.ReadLine();

            long/*var*/ decimalRepresentation = 0;
            
            // Sub Array with Length 3...
            for (int i = 0; i < input.Length; i += 3) //Jump 3 Symbols
            {
                var digitIn13 = input.Substring(i, 3);
                var decimalValue = alphabet.IndexOf(digitIn13);

                decimalRepresentation *= 13;
                decimalRepresentation += decimalValue;
            }
            Console.WriteLine(decimalRepresentation);
        }
    }
}
