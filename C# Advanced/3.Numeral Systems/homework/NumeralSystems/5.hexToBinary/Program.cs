using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _5.hexToBinary
{
    class Program
    {
        static string HexToBinary(string hex)
        {
            string[] binGroupsOfFour =
            {
                "0000",
                "0001",
                "0010",
                "0011",
                "0100",
                "0101",
                "0110",
                "0111",
                "1000",
                "1001",
                "1010",
                "1011",
                "1100",
                "1101",
                "1110",
                "1111",
            };
            string binary = "";
            int index = 0;
            for (int i = 0; i < hex.Length; i++)
            {
                switch (hex[i])
                {
                    case '0': index = 0; break;
                    case '1': index = 1; break;
                    case '2': index = 2; break;
                    case '3': index = 3; break;
                    case '4': index = 4; break;
                    case '5': index = 5; break;
                    case '6': index = 6; break;
                    case '7': index = 7; break;
                    case '8': index = 8; break;
                    case '9': index = 9; break;
                    case 'A': index = 10; break;
                    case 'B': index = 11; break;
                    case 'C': index = 12; break;
                    case 'D': index = 13; break;
                    case 'E': index = 14; break;
                    case 'F': index = 15; break;
                }
                binary += binGroupsOfFour[index].ToString();
            }

            //Remove leding zeros
            while (binary[0] == '0')
            {
                binary = binary.Substring(1);
            }

            return binary;
        }

        static void Main()
        {
            string hexadecimal = Console.ReadLine();
            string binary = HexToBinary(hexadecimal);
            Console.WriteLine(binary);
        }
    }
}
