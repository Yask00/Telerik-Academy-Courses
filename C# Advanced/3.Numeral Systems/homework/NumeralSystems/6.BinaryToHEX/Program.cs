using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _6.BinaryToHEX
{
    class Program
    {
        class BinaryToHexadecimal
        {
            static string BinaryToHex(string binary)
            {
                string hex = "";
                binary = binary.PadLeft(4, '0');
                char[] hexChars = { '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F' };
                for (int i = binary.Length - 4; i >= binary.Length % 4; i -= 4)
                {
                    hex = hexChars[Convert.ToInt32(binary.Substring(i, 4), 2)].ToString() + hex;
                }

                if (binary.Length % 4 > 0)
                {
                    hex = hexChars[Convert.ToInt32(binary.Substring(0, binary.Length % 4), 2)].ToString() + hex;
                }

                return hex;
            }

            static void Main()
            {
                string binary = Console.ReadLine();
                string hexadecimal = BinaryToHex(binary);
                Console.WriteLine(hexadecimal);
            }
        }
    }
}
