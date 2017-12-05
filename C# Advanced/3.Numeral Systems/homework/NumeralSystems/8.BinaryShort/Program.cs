using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _8.BinaryShort
{
    class Program
    {
        static string ShortToBinary(short number)
        {
            char[] b = new char[16];
            int pos = 15;
            int i = 0;

            while (i < 16)
            {
                if ((number & (1 << i)) != 0)
                {
                    b[pos] = '1';
                }
                else
                {
                    b[pos] = '0';
                }
                pos--;
                i++;
            }
            return new string(b);
        }

        static void Main()
        {
            short n = short.Parse(Console.ReadLine());
            string binaryRepresentation = ShortToBinary(n);
            Console.WriteLine(binaryRepresentation);
        }
    }
}
