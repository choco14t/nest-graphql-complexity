# Nest GraphQL Complexity

Example graphql-query-complexity for NestJS

## Setup / Execution

```bash
npm install
npm run start:dev
```

## Example Complexity Query

This project apply simple estimator, default complexity is 1.
It increase complexity per retrieving fields.

```graphql
# complexity: 5
query QueryPosts {
  posts {
    id
      author {
        posts {
          id
        }
      }
  }
}

# complexity: 10
query QueryAuthors {
  authors {
    id
      name
      posts {
        author {
          name
            posts {
              id
                author {
                  id
                }
            }
        }
      }
  }
}
```

## References

- [Complexity | NestJS](https://docs.nestjs.com/graphql/complexity)
- [Field Extensions Estimator | graphql-query-complexity](https://github.com/slicknode/graphql-query-complexity/blob/master/src/estimators/fieldExtensions/README.md)
- [Simple Estimator | graphql-query-complexity](https://github.com/slicknode/graphql-query-complexity/blob/master/src/estimators/simple/README.md)

