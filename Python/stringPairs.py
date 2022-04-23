def stringPairs(inputStr):
    # Base case for input string with odd length
    if len(inputStr) == 1:
        return [(inputStr[0],)]

    # Base case for input string with even length
    if len(inputStr) == 2:
        return [(inputStr[0], inputStr[1])]
    
    output = stringPairs(inputStr[1:-1])
    output = [(inputStr[0], inputStr[-1])] + output

    return output

def main():
    # inputStr = "12345678"
    inputStr = "123R456"
    
    print(stringPairs(inputStr)) 



if __name__ == "__main__":
    main()