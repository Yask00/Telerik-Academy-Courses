using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _10.UnicodeCharacters
{
    class Program
    {
        static void Main(string[] args)
        {
            string input = Console.ReadLine();
            
            for (int i = 0; i < input.Length; i++)
            {
                Console.Write("\\u{0:X4}", (int)input[i]);  
            }
            Console.WriteLine();
        }
    }
}
