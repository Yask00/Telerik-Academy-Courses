using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _6.StringLength
{
    class Program
    {
        static void Main(string[] args)
        {
            string input = Console.ReadLine();
            char pad = '*';

            if (input.Length < 20)
            {
                Console.WriteLine(input.PadRight(20, pad));
            }
            else
            {
                Console.WriteLine(input);
            }
        }
    }
}
