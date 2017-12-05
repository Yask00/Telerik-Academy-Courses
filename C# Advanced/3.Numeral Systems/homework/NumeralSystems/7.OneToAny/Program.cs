using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Numerics;

namespace _7.OneToAny
{
    class Program
    {
        static void dectohex(BigInteger numberInDecimal, int krainaBroina, bool znak)
        {

            string result = "";
            while (numberInDecimal > 0)
            {
                if (numberInDecimal % krainaBroina > 9 && krainaBroina > 10)
                {

                    BigInteger ostatuk = numberInDecimal % krainaBroina;

                    if (ostatuk == 10) result = result + 'A';
                    else if (ostatuk == 11) result = result + 'B';
                    else if (ostatuk == 12) result = result + 'C';
                    else if (ostatuk == 13) result = result + 'D';
                    else if (ostatuk == 14) result = result + 'E';
                    else if (ostatuk == 15) result = result + 'F';


                }
                else
                {
                    result += numberInDecimal % krainaBroina;
                }
                numberInDecimal = numberInDecimal / krainaBroina;
            }

            var res = result.ToCharArray();

            Array.Reverse(res);

            // bool flag = false;
            if (znak == false) Console.Write('-');
            //for (int i = 0; i < res.Length; i++)
            //{
            //    if (res[i] != '0') { Console.Write(res[i]); flag = true; continue; }
            //    else if (flag == false) { continue; }
            //    Console.Write(res[i]);
            //}

            for (int i = 0; i < res.Length; i++)
            {
                Console.Write(res[i]);
            }



        }
        static void Main(string[] args)
        {
            bool znak = true;
            int purvichnaBroina = int.Parse(Console.ReadLine());
            string number = (Console.ReadLine());
            int krainaBroina = int.Parse(Console.ReadLine());
            BigInteger sum = 0;
            for (int i = 0; i < number.Length; i++)
            {
                if (number[i] == '-' && i == 0) { znak = false; number = number.Trim(new Char[] { '-' }); i = -1; continue; }
                if (char.IsDigit(number[i]))
                    sum = sum + (number[i] - '0') * (BigInteger)(BigInteger.Pow(purvichnaBroina, (number.Length - i - 1)));
                else { sum = sum + ((number[i] - 'A') + 10) * (BigInteger)(BigInteger.Pow(purvichnaBroina, (number.Length - i - 1))); }
            }

            dectohex(sum, krainaBroina, znak);
        }
    }
}
