using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _4.Variable_Length_Codes
{
    class Program
    {
        static void Main()
        {
            
            var numbersAsStrings = Console.ReadLine().Split(new[] { " " }, StringSplitOptions.RemoveEmptyEntries);


            StringBuilder encodedString = new StringBuilder();

            foreach (var str in numbersAsStrings)
            {
                var num = int.Parse(str);
                encodedString.Append(
                    Convert.ToString(num, 2).PadLeft(8, '0')
                    );
            }

            
            int n = int.Parse(Console.ReadLine());
            char[] dictionary = new char[n+ 1];

            for (int i = 0; i < n; i++)
            {
                var line = Console.ReadLine();
                char symbol = line[0];
                int index = int.Parse(line.Substring(1));
                dictionary[index] = symbol;
            }

            StringBuilder decoded = new StringBuilder();

            //fill decoded
            int ones = 0;
            foreach (var ch in encodedString.ToString())
            {
                if (ch == '1')
                {
                    ones++;
                }
                else // '0'
                {
                    decoded.Append(dictionary[ones]);
                    ones = 0;
                }
            }
            // not to loose last one if no 0 at the end
            if (ones > 0)
            {
                decoded.Append(dictionary[ones]);
            }

            Console.WriteLine(decoded);
        }
    }
}
