export class Parser {
  static ip(value: any): string | null {
    return Parser.ipV4(value) || Parser.ipV6(value);
  }

  static ipV4(value: any): string | null {
    if (typeof value !== 'string') {
      return null;
    }

    const ipv4Regex =
      /(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)/;
    const match = value.match(ipv4Regex);
    return match ? match[0] : null;
  }

  static ipV6(value: any): string | null {
    if (typeof value !== 'string') {
      return null;
    }

    const ipv6Regex = /(?:[0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}/;
    const match = value.match(ipv6Regex);
    return match ? match[0] : null;
  }
}
